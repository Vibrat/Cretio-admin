import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = { data: { token: 123129387192837219, name: 'Mr. Nice' } };
        return { heroes };
    }
}