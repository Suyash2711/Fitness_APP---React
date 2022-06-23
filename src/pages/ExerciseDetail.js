import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material'

import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search9.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      console.log(exerciseVideosData);
      setexerciseVideos(exerciseVideosData.contents);
    }
    fetchExerciseData();
  }, [id])
  

  return (  
    <Box>
      <Detail exerciseDetail = {exerciseDetail} />
      {console.log(exerciseVideos)}
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail