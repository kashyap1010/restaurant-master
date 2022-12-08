import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from './Card'
import image from '../../Assets/pizza.jpg'
// import burger from '../../Assets/burger.jpg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    let items = [{ id: 1, name: 'Veg Loaded', Price: 10.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'pizza' },
    { id: 2, name: 'Peproni', Price: 11.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'pizza' },
    { id: 3, name: 'Margerita', Price: 7.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'pizza' },
    { id: 4, name: 'Bacon peproni', Price: 12.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'pizza' },
    { id: 5, name: 'Chees Burger', Price: 5.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'burger' },
    { id: 6, name: 'Chees Pav', Price: 6.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'burger' },
    { id: 7, name: 'BigMac', Price: 4.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'burger' },
    { id: 8, name: 'Misal Pav', Price: 5.29, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'burger' },
    { id: 9, name: 'Egg and Cheese', Price: 2.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'burger' },
    { id: 10, name: 'Coke', Price: 1.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'drinks' },
    { id: 11, name: 'Sprite', Price: 1.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'drinks' },
    { id: 12, name: 'Ginger ale', Price: 1.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'drinks' },
    { id: 13, name: 'Root beer', Price: 1.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'drinks' },
    { id: 14, name: 'Root beer', Price: 1.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'drinks' },
    { id: 15, name: 'Mashroom spice', Price: 10.99, Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate.', Category: 'pizza' }];


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display={'flex'} justifyContent={'space-evenly'}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Pizza" {...a11yProps(0)} />
                    <Tab label="Burger" {...a11yProps(1)} />
                    <Tab label="Coldrinks" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box
                    // paddingTop={8}
                    margin="30px auto"
                    minHeight={'100vh'}
                    display={'flex'}
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-evenly'}
                >
                    
                    {items.map((item) =>
                    {if(item.Category === 'pizza')
                        return <Card image={image} name={item.name} price={item.Price} description={item.Description} />
                    })},

                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    // paddingTop={8}
                    margin="30px auto"
                    minHeight={'100vh'}
                    display={'flex'}
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-evenly'}
                >
                     {items.map((item, index) =>
                    {if(item.Category === 'burger')
                        return <Card image={image} name={item.name} price={item.Price} description={item.Description} />
                    },{})},
                </Box>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Box
                    // paddingTop={8}
                    margin="30px auto"
                    minHeight={'100vh'}
                    display={'flex'}
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    justifyContent={'space-evenly'}
                >
                    {items.map((item) =>
                    {if(item.Category === 'drinks')
                        return <Card id={item.id} image={image} name={item.name} price={item.Price} description={item.Description} />
                    })},
                </Box>
            </TabPanel>
        </Box>
    );
}