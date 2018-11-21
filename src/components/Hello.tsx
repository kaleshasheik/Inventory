import * as React from "react";
import './Hello.scss';
import styled from 'styled-components';
const Button = styled.button`
    & {
        color: yellow
    }
`

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! <Button>Hello</Button></h1>;
    }
}