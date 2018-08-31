import { TabComponent } from '../models/tab-component';
import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const tabs: TabComponent[] = [
            {
                title: 'tab1',
                active: true
            },
            {
                title: 'tab2'
            },
            {
                title: 'tab3'
            },
            {
                title: 'tab4'
            },
            {
                title: 'tab5'
            },
            {
                title: 'tab6'
            },
            {
                title: 'tab7'
            },
            {
                title: 'tab8'
            },
            {
                title: 'tab9'
            },
            {
                title: 'tab10'
            },
            {
                title: 'tab11'
            },
            {
                title: 'tab12'
            }
        ];
        return { tabs };
    }
}