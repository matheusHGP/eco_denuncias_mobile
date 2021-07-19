import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Card from "../components/Card";
import axios from 'axios'

class NewOptions extends Component {
    constructor() {
        super()
        this.state = {
            problems: []
        }
    }

    getProblem = async () => {
        try {
            const problems = await axios.get('http://10.0.2.2:8080/problems')
            return problems.data
        } catch (error) {
            alert(error.message)
            console.log(error.message)
        }
    }

    async componentDidMount() {
        const problems = await this.getProblem()
        this.setState({ problems: problems })
    }

    render() {
        return this.state.problems.map((problem, index) => {
            return (
                <Card
                    navigation={this.props.navigation}
                    key={index}
                    problem={problem}
                >
                </Card>
            )
        })
    }
}

export default NewOptions;