import { RouteReuseStrategy, ActivatedRouteSnapshot } from '@angular/router';
import { ReuseTabService } from './layout/services/reuse-tab.service';

export class CustomeRouteReuseStrategy implements RouteReuseStrategy {
    constructor(private srv: ReuseTabService) { }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.srv.shouldDetach(route);
    }
    store(route: ActivatedRouteSnapshot, handle: {}): void {
        console.log('dfadsa');
        this.srv.store(route, handle);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.srv.shouldAttach(route);
    }
    retrieve(route: ActivatedRouteSnapshot): {} {
        return this.srv.retrieve(route);
    }
    shouldReuseRoute(
        future: ActivatedRouteSnapshot,
        curr: ActivatedRouteSnapshot,
    ): boolean {
        return this.srv.shouldReuseRoute(future, curr);
    }
}
