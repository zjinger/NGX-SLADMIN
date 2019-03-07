declare var module: NodeModule;
declare var require: NodeRequire;
interface NodeModule {
    id: string;
}
interface NodeRequire {
    (id: string): any;
}
declare var lightGallery: any;

// interface JQuery {
//     lightGallery(options?: any): any;
// }