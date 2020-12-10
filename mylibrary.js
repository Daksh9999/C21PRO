function hasCollided(bullet,wall){
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if(bullletRightEdge>=wallLeftEdge)
    {
      return true
    }
    else{
      return false;
    }
  }
  