
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../App/App.css'


export class Albumpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hovered: false};

        this.handleAlbumpage = this.handleAlbumpage.bind(this);
    }

    handleAlbumpage() {
        let myalbum = this.props.id;
        let substrId = myalbum.substr(5,1);

        this.props.myalbum(substrId);
        this.props.albumitself(true);
    }

    render() {
        return (
            <Col sm='6' md='4' lg='2'>
                <Card 
                    id={this.props.id} 
                    style={{maxWidth: '13rem'}}
                    onClick={this.handleAlbumpage}
                    onMouseOver={() => this.setState({ hovered: true})}
                    onMouseOut={() => this.setState({ hovered: false})}
                    className={this.state.hovered ? 'hovered' : ''}
                >
                    <Card.Img variant="top" className="img-fluid" src={this.props.cover} alt={this.props.alt} title={this.props.alt} />
                    <Card.Body>
                        <Card.Title>{this.props.album}</Card.Title>
                        <Card.Subtitle>{this.props.singer}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
            
        );
    }
}