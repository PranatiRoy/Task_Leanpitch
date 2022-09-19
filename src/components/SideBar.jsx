import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from "react-router-dom";
import Header from './Header';
import { useState } from "react";
import Button from '@mui/material/Button';
//component import
import { SideBarMenu } from './SideBarMenu';
import SendMessageButton from './SendMessageButton';
import { borderRight } from '@mui/system';
import WhyMatter from './WhyMatter';
const SideBar = () => {
    const [selectedTag, setSelectedTag] = useState(0)
    return (
        <>

            <div className='page-content'>
                <Header />
                <div className="Sidebar">
                    <List
                        sx={{
                            marginTop: '67.5px',
                        }}

                    >
                        {SideBarMenu.map((val, key) => (
                            <Link to={val.link}>
                                <ListItem key={val.id}
                                    sx={{
                                        fontSize: '22px', fontWeight: '500', marginTop: '-5px', width: '300px', height: '42px',
                                        backgroundColor: selectedTag === val.id ? 'orange' : "",
                                        color: selectedTag === val.id ? 'black' : "",
                                    }}
                                    onMouseOver={() => setSelectedTag(val.id)}
                                >
                                    {val.title}


                                </ListItem>

                            </Link>


                        ))}
                    </List>
                </div>

                <Button
                    sx={{
                        marginTop: '-7rem',
                        marginBottom: '10px',
                        width: '200px',
                        backgroundColor: 'orangered',
                        color: 'white',
                        marginLeft: '295%',
                    }}>
                    Send Mess...</Button>
            </div>

        </>
    )
};

export default SideBar;