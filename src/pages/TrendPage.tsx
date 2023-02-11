import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

type TrendPageProps = {
  data: Map<string, string[]>;
};

function TrendPage({data} : TrendPageProps) {
  console.log(data);
  const getLinks = (links: string[]) => {
    return links.map(link => (
        <a className="btn btn-secondary me-4" href={"rate/" + link} key={link}>
          {link}
        </a>
      )
    );
  }
  return (
    <div className="container py-4">
      { 
        Array.from(data.entries()).map((title) => (
          <div className="row py-4" key={title[0]}>
            <h1 className="h1">
              {title[0]}
            </h1>
            <div className="inline">
              {getLinks(title[1])}
            </div>
          </div>
        ))
      }
    </div>
    );
}

export default TrendPage;