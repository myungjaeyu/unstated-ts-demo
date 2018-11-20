import * as React from 'react';
import { Subscribe } from 'unstated';
import AppContainer from './provider/container/AppContainer';

class App extends React.Component {
    public render() {
        return (
        <Subscribe to={[AppContainer]}>
        {
            (app : AppContainer) => {

                return (
                <div className='App'>
                    { app.state.tick }

                    <button onClick={ _ => app.addTick() }>
                        Add
                    </button>
                    
                </div>
                )
            }
        }
        </Subscribe>
        );
    }
}

export default App;
