"use client"
import { useState } from "react";
import RootLayout from "../defaultLayout"
import '../globals.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

interface HistoryCardProps {
    id: string,
    title: string,
    date: number
}

const History = () => {
  const [historyCards, setHistoryCards] = useState<HistoryCardProps[]>([
    { id: '1', title: 'ABC', date: 1672527600000 },
    { id: '2', title: 'ABC', date: 1672527600000 },
    { id: '3', title: 'ABC', date: 1672527600000 },
    { id: '4', title: 'ABC', date: 1672527600000 },
    { id: '5', title: 'ABC', date: 1672527600000 },
    { id: '6', title: 'ABC', date: 1672527600000 },
    { id: '7', title: 'ABC', date: 1672527600000 },
    { id: '8', title: 'ABC', date: 1672527600000 },
    { id: '9', title: 'ABC', date: 1672527600000 },
    { id: '10', title: 'ABC', date: 1672527600000 },
    { id: '11', title: 'ABC', date: 1672527600000 },
    { id: '12', title: 'ABC', date: 1672527600000 },
    { id: '13', title: 'ABC', date: 1672527600000 },
  ]);
  return <RootLayout>
    <div className="flex flex-col justify-center">
      <div className="text-4xl mt-[300px] ml-[50px]">Portfolios History</div>
      <ul className="h-full w-full flex p-20 justify-between flex-wrap mt-[100px]">
        {historyCards?.map?.((card: HistoryCardProps, index) => {
          return <li key={card?.id}>
            <Card className="mr-14 mb-14">
              <CardActionArea>
                <CardMedia
                  component="img"
                  className="overflow-hidden w-[400px] h-[300px]"

                  width={400}
                  height={300}
                  image={`/${(index % 7 + 1).toString()}.jpg`}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <span suppressHydrationWarning>{new Date(card.date).toLocaleString()}</span>
                </Typography>
                <DeleteForeverIcon className="text-red-600 mt-2 hover:cursor-pointer" />
              </CardContent>

            </Card>
          </li>
        })}
      </ul>
    </div>
  </RootLayout>
}
export default History