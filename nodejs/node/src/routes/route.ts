import type { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controller";

const routeHandler = (req:IncomingMessage, res: ServerResponse) => {
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
    } else if (url?.startsWith("/products")) {
        //> check route for product page
        productController(req, res);
    } else {
        //> if the route not found
        // console.log("Route is not defined");
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.end("Route not defined");
        res.writeHead(404, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "Route not defined" }));
    }
};

export default routeHandler;
