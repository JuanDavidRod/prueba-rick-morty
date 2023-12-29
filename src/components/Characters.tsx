import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface Props {
    name: string
    image: string
}

const Characters: React.FC<Props> = ({name, image}) => {
    return (
        <Grid item xs={4}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={`Imagen de ${name}`}
                    />
                        <CardContent>
                            <h5>
                                {name}
                            </h5>
                        </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Characters 