import React, { useState, useEffect } from 'react'
import '../App.scss'
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import { Onlinecinema } from '../components/Onlinecinema';
import {TvShow} from '../components/Films'

import { Row, Col, Container,Image,Button } from 'react-bootstrap'
const picha= {
    bill: require("../components/img/bill.jpg"),
    witcher:require("../components/img/witcher.jpg"),
    boys : require("../components/img/boys2.jpeg"),
    bted : require("../components/img/billtt.jpg"),
    nm : require("../components/img/mutant.jpg"),
    tenet : require("../components/img/ten.jpg"),
    mul : require("../components/img/mul.jpg")
  };

export default function Accueil() {

    useEffect(() => {
    
        Aos.init({duration: 2000});

    },[])

  
       
    
    return (

 
      
  <section>
      
      
  <div class="container-fluid pageContent">
  
      <div data-aos="fade-left"class="row filtres pt-5">
          <div class="col-12">
            
          </div>
      </div>
  </div>
  <div class="container-fluid pageContent">

</div>
<section class=" col-3 posters aside">
<div data-aos="fade-left" class="latest-posts">
          
                       <h5>Aujourd'hui au cinéma</h5>
                       <div id="post1" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.tenet}  />
                           </div>
                           <div class="col8">
                               <p>SCIENSE-FICTION</p>
                               <hr></hr>
                               <span>TENET</span>
                               
                           </div>
                           <div class="col12">
                               
                           </div>
                           
                       </div>
                       <div id="post2" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.nm}  />
                           
                           </div>
                           <div class="col8">
                               <p>HORREURS</p>
                               <hr></hr>
                                <span>The New Mutants</span>
                           </div>
                           <div class="col12">
                               <hr></hr>
                           </div>
                       </div>

                       <div id="post3" class="row">
                           <div class="col4 text-center" >
                           <Image fluid src={picha.bted}  />
                           </div>
                           <div class="col8">
                               <p>COMEDIE,FANTASIE</p>
                               <hr></hr>
                                   <span>Bill and Tedd Face The Music</span>
                           </div>
                           <div class="col12">
                               <hr></hr>
                           </div>
                       </div>

                       <div id="post4" class="row">
                           <div class="col4 text-center">
                           <Image fluid src={picha.mul}  />
                           </div>
                           <div class="col8">
                               <p>DISNEY</p>
                               <hr></hr>
                                   <span>MULAN</span>
                           </div>

                       </div>
                   </div>
               <div class="col-12">
                    <div class="advertisement d-flex flex-column justify-content-center">
                        

                        
                        <p><span>Advertisement</span> Custom Vertical Height</p>
                    </div>
               </div>
            </section>

   <div  class="poster row pt-5">
   <section  class="col-10 offset-2 col-lg-9  posts">
       <article data-aos="flip-left" class="post mb-3">
           <div class="insidePost mx-3">
               <div class="featureImg">
               <iframe className="video" width="100%" height="220" src="https://www.youtube.com/embed/1gPGeAYo3yU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               </div>
               <div class="postContent">
                   <div class="postPreview">
                       <p class="contentMeta">

                       </p>
                       <h2> Grand Retour: Bill et Ted</h2>
                       <p class="resume">Keanu Reeves et Alex Winters sauvent l'univers avec de la musique.Un nouveau trailer pour la comédie "Bill and Ted" a été publié. 30 ans plus tard, les héros de Keanu Reeves et Alex Winters sont de retour ensemble à l'écran et repartent pour un autre voyage dans le temps pour tenter de trouver une chanson qui unira le monde et sauvera la réalité</p>
                       <hr />
                   </div>
                   <div class="postMeta">
                       <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                       <ul>
                           <li><a href="#comedy">Comedy</a></li>
                           
                       </ul>
                      
                     
                   </div>
               </div>
           </div>
          
       </article>
       <article data-aos="flip-left" class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <iframe className="video" width="100%" height="240" src="https://www.youtube.com/embed/NLOp_6uPccQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article  data-aos="fade-up" class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <Image fluid src={picha.witcher}  />
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
            <article data-aos="fade-up" class="post mb-3">
                <div class="insidePost mx-3">
                    <div class="featureImg">
                    <Image fluid src={picha.boys}  />
                    </div>
                    <div class="postContent">
                        <div class="postPreview">
                            <p class="contentMeta">

                            </p>
                            <h2>"The Witcher": l'émission Netflix le plus populaires selon la Variety</h2>
                            <p class="resume">Variety a publié une liste des séries Netflix les plus regardées. Parmi les leaders figurent des succès comme The Witcher et The Paper House, l'émission de télé-réalité Trial by Temptation et le documentaire The King of the Tigers.</p>
                            <hr />
                        </div>
                        <div class="postMeta">
                            <a class="comment"><i class="far fa-comment"></i><span class="nbCommentaires">♥</span></a>
                            <ul>
                                <li><a href="#">Fantasy</a></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
</section>
</div>
       </section>
      
       
    

    );
    
}


