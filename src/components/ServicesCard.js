import { Card, CardHeader, CardContent, Grid, Typography } from "@mui/material";
import './ServicesCard.css';

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
        <Grid id='grid-container' container spacing={2}>
            {services.map(service => (
                <Grid item sm={4} xs={6} key={service[0]}>
                    <Card id='card'>
                        <CardHeader
                            id='card-header'
                            title={service[0]}
                        />
                        <CardContent>
                            <Typography id='card-content'>
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