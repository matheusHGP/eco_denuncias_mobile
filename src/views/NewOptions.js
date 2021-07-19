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
            const problems = await axios.get('http://10.0.2.2:6000/problems')
            return problems.data
        } catch (error) {
            console.log(error.message)
        }
        // var config = {
        //     method: 'get',
        //     url: 'http://10.0.2.2:6000/problems',
        //     headers: {
        //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFwYSI6IjEyMzQ1IiwiaWF0IjoxNjI2NjY5NjMxLCJleHAiOjE2Mjc1MzM2MzEsInN1YiI6IjE0OWZjZmFlLWVmYzQtNDMyMC04ODFhLWNjNzA2NmQzMGNiNSJ9.VwyYftwoqpfnYH6qDl9kYUrweRygkk7UuBes4RIapm0'
        //     }
        // };
        // axios(config)
        //     .then(function (response) {
        //         alert('foi')
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error.message);
        //     });
    }

    async componentDidMount() {
        const problems = await this.getProblem()
        console.log(problems)
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

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: '#446DAB',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        marginTop: 22
    },
    textIcon: {
        marginTop: 0,
        color: 'white',
        fontWeight: '100'
    }
});

export default NewOptions;