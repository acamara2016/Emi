import React from 'react';

export default function Card(props){
    return(
        <div class="col-lg-4 col-md-12 mb-4">
        <div class="card card-body">
          <h4 class="card-title">{props.subject} {props.time}</h4>
          <p class="card-text mt-3 mb-4">{props.note}</p>
          <div class="flex-row">
            <a class="card-link">Card link</a>
            <a class="card-link">Another link</a>
          </div>
        </div>
      </div>

    );
}