import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import { json } from "stream/consumers";

const server: Server = createServer(
    (req: IncomingMessage, res: ServerResponse) => {
        // console.log("Request: ", req);
        // console.log("Response: ", res);
        // console.log(req.url)
        // console.log(req.method)

        const url = req.url; //- endpoints -> "/", "/products", "/courses" etc
        const method = req.method; //- Methods->"GET", "POST", "PUT"

        //NOTE: 200 -> OK, 404 -> error

        if (url === "/" && method === "GET") {
            // console.log("Root route");

            //> display content as plain text
            // res.writeHead(200, { "content-type": "text/plain" });
            // res.end({message: "Root route"})

            //> display content in JSON format
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Root route" }));
        } else if (url === "/products") {
            //> check route for product page
            res.writeHead(200, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Product page route" }));
        } else {
            //> if the route not found
            // console.log("Route is not defined");
            // res.writeHead(200, {'content-type': 'text/plain'});
            // res.end("Route not defined");
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "Route not defined" }));
        }
    },
);

// server.listen(port, function)
server.listen(5000, () => {
    console.log("Server is running!!!");
});
