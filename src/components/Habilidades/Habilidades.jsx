import html from "../../image/html5.svg";
import css from "../../image/css3.svg";
import sass from "../../image/sass.svg";
import javaScript from "../../image/javascript.svg";
import react from "../../image/react.svg";
import git from "../../image/git.svg";
import gitHub from "../../image/github.svg";
import bootstrap from "../../image/bootstrap.svg";
import firebase from "../../image/firebase.svg";
import node from "../../image/nodedotjs.svg";
import express from "../../image/express.svg";
import mongo from "../../image/mongodb.svg";
import mongoose from "../../image/mongodb.svg";
import passport from "../../image/passport.svg";
import jwt from "../../image/jsonwebtokens.svg";
import docker from "../../image/docker.svg";
import swagger from "../../image/swagger.svg";
import sql from "../../image/mysql.svg";
import "./Habilidades.css";

export const Habilidades = () => {
    return (
        <div className="habilidades-grid">
            <div className="habilidad-item" data-tech="html">
                <img src={html} alt="html5"/>
                <p><strong>Html 5</strong></p>
            </div>
            <div className="habilidad-item" data-tech="css">
                <img src={css} alt="css3"/>
                <p><strong>Css 3</strong></p>
            </div>
            <div className="habilidad-item" data-tech="sass">
                <img src={sass} alt="sass"/>
                <p><strong>Sass</strong></p>
            </div>
            <div className="habilidad-item" data-tech="javaScript">
                <img src={javaScript} alt="javascript"/>
                <p><strong>JavaScript</strong></p>
            </div>
            <div className="habilidad-item" data-tech="react">
                <img src={react} alt="react"/>
                <p><strong>React js</strong></p>
            </div>
            <div className="habilidad-item" data-tech="git">
                <img src={git} alt="git"/>
                <p><strong>Git</strong></p>
            </div>
            <div className="habilidad-item" data-tech="github">
                <img src={gitHub} alt="github"/>
                <p><strong>Github</strong></p>
            </div>
            <div className="habilidad-item" data-tech="bootstrap">
                <img src={bootstrap} alt="bootstrap"/>
                <p><strong>Bootstrap</strong></p>
            </div>
            <div className="habilidad-item" data-tech="firebase">
                <img src={firebase} alt="firebase"/>
                <p><strong>Firebase</strong></p>
            </div>
            <div className="habilidad-item" data-tech="node">
                <img src={node} alt="node js"/>
                <p><strong>Node.js</strong></p>
            </div>
            <div className="habilidad-item" data-tech="express">
                <img src={express} alt="Express"/>
                <p><span>Express</span></p>
            </div>
            <div className="habilidad-item" data-tech="mongo">
                <img src={mongo} alt="mongo db"/>
                <p><strong>MongoDB</strong></p>
            </div>
            <div className="habilidad-item" data-tech="mongoose">
                <img src={mongoose} alt="mongoose"/>
                <p><strong>Mongoose</strong></p>
            </div>
            <div className="habilidad-item" data-tech="passport">
                <img src={passport} alt="passport"/>
                <p><strong>Passport</strong></p>
            </div>
            <div className="habilidad-item" data-tech="jwt">
                <img src={jwt} alt="jwt"/>
                <p><strong>JWT</strong></p>
            </div>
            <div className="habilidad-item" data-tech="docker">
                <img src={docker} alt="docker"/>
                <p><strong>Docker</strong></p>
            </div>
            <div className="habilidad-item" data-tech="swagger">
                <img src={swagger} alt="swagger"/>
                <p><strong>Swagger</strong></p>
            </div>
            <div className="habilidad-item" data-tech="sql">
                <img src={sql} alt="sql"/>
                <p><strong>MySQL</strong></p>
            </div>
        </div>
    )
};