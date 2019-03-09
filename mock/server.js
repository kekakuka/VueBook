let http=require('http');
let fs=require('fs');
let url=require('url');

let sliders=require('./sliders');
function readBooks(cb){
    fs.readFile('./book.json','utf8',function (err,data) {
        if(err||data.length==0){
            cb([]);
        }else {
            cb(JSON.parse(data));
        }
    })
}

function writeBooks(id,cb){
   readBooks(function (books) {
      let bookList=books.filter(item=>item.bookId!==id);
    fs.writeFile('./book.json',JSON.stringify(bookList),function (books) {
       cb(books);
    })
    });
}


http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method=="OPTIONS") return res.end();

    let{pathname,query}=url.parse(req.url,true);
 let bid=parseInt(query.id) ;
    if(pathname==='/sliders'){
        res.setHeader('Content-Type',
            'application/json;charset=utf8');
        res.end(JSON.stringify(sliders));
        return;
    }
    if(pathname==='/hot'){
       readBooks(function (books) {
           let hotBooks=JSON.stringify(books.reverse().slice(0,6)) ;
           res.end( hotBooks);
        });
        return ;
    }
    if(pathname==='/books'){
        switch (req.method) {
            case "GET":
                readBooks(function (books) {
                    let hotBooks=JSON.stringify(books.reverse()) ;
                    res.end( hotBooks);
                });
                break;
            case "POST":
                break;
            case "PUT":
               if(bid){
                   let str='';
                   let book;
                   req.on('data',chunk=>{
                       str+=chunk;
                   });
                   req.on('end',()=>{
                        book=JSON.parse(str);
                   });
                   readBooks(function (books) {
                       let theBooks=books.map(item=>item.bookId===bid?item=book:item);
                       fs.writeFile('./book.json',JSON.stringify(theBooks),function () {
                           res.end(JSON.stringify());
                       })
                   })
               }
                break;
            case "DELETE":
               writeBooks(bid,function () {
                   res.end(JSON.stringify());
               });
                break;
        }
        return ;
    }

    if(pathname==='/details'){

        readBooks(function (books) {

           let theBook=books.find(item=>item.bookId===bid);
            if (!theBook) theBook={};
            let hotBook=JSON.stringify(theBook) ;
            res.setHeader('Content-Type','application/json;charset=utf8');
            res.end(hotBook);
        });
    }
    }
).listen(3332);
