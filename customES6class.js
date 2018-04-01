import React from 'react';

export default class Db extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "kind hearted words." }
    }

    sayASwear() {
        this.state.message = "hey man f**k you.";
    }
}