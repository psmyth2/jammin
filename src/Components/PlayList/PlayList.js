import React, { Component } from 'react';
import './PlayList.css';
import {TrackList} from '../TrackList/TrackList';

export class PlayList extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }
    
    render() {
       return (
         <div className="Playlist">
          <input defaultValue={this.props.name} onChange={this.handleNameChange} />
          <TrackList  tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
          <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
        </div>
       );    
    }
}