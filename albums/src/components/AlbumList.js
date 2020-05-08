import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const api = 'https://rallycoding.herokuapp.com/api';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        axios.get(`${api}/music_albums`)
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
