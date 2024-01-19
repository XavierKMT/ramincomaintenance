import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";

function ServicesCard() {

    const services = [
        ['Painting', 'Interior and Exterior painting'],
        ['Deck Staining', 'Semi-Transparent and Opaque Stains'],
        ['General Repairs', 'Drywall, Trim, Deck, Fence and much more!'],
        ['General Installations', 'Basic installations that comply with our RBQ accreditation'],
        ['Pressure Washing','Cleaning driveways, walkways, house siding and much more!'],
        ['Outdoor Projects','Cleaning gutters, raking leaves, landscaping, and much more!']
    ];

    return (
        <Grid container spacing={2} style={{textAlign: 'center', width: '60vw'}}>
            {services.map(service => (
                <Grid item sm={4} xs={6} key={service[0]}>
                    <Card style={{backgroundColor: 'transparent', boxShadow: '0 0 5px 1px #1c3b5e'}}>
                        <CardHeader
                            title={service[0]}
                            style={{color: 'white'}}
                        />
                        <CardContent>
                            <Typography style={{color:'lightgray'}}>
                                {service[1]}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ServicesCard;