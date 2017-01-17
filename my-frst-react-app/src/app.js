import React from 'react';
import Hello from './hello.js';

export default class App extends React.Component{

    render(){    
const users = [
        { id: 1, name: 'Leia' },
        { id: 2, name: 'Luke' },
        { id: 3, name: 'Han' }
        ];
        
       return (
      <div>
        {
          users.map(function(user) {
            return <Hello key={user.id} name={user.name} />;
          })
        }
      </div>
    );
}
}