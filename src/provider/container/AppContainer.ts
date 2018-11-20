import { Container } from "unstated";

interface AppState {
    tick : number;
}

export default class AppStateContainer extends Container<AppState> {

    state : AppState = {
        tick : 0
    };

    public addTick() : void {

        this.setState( { tick : ++this.state.tick })

    }

}