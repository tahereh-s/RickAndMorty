import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


interface Props {
  character: any;
}

const CharacterList: React.FC<Props> = ({ character }) => {

  return (
    <Card className='h-full' sx={{ maxWidth: 345 }}>
      <a className="no-underline">
        <CardMedia
          component="img"
          height="fit-content"
          image={character.image}
          alt={character.name}
          className="transition ease-in-out delay-150 hover:opacity-70"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"  component="div">
            <div className="relative">
              {character.species} - {character.status}
              <span className={`animate-ping absolute inline-flex bottom-1 right-0 h-2 w-2 rounded-full opacity-75 ${character.status==='Alive' ? 'bg-green-400' : character.status==='Dead' ? 'bg-red-400' : 'bg-gray-900' }`}></span>
            </div>
          </Typography>
        </CardContent>
      </a>
    </Card>
  );
};

export default CharacterList;