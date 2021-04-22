import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { useDataLayerValue } from './DataLayer';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src='https://prowly-uploads.s3.eu-west-1.amazonaws.com/uploads/1036/assets/56128/Spotify_Logo_RGB_White.png'></img>
            <SidebarOption title="Home" Icon={HomeIcon}/>
            <SidebarOption title="Search" Icon={SearchIcon}/>
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>

            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {
            playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))
            }

            
        </div>
    )
}

export default Sidebar
