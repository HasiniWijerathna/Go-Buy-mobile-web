import { observable } from "mobx";
import { CreateContext } from "react";

class UserStore {
    @observable geoLocation = {};
}

export const ShoppingStoreContext = CreateContext(new UserStore());