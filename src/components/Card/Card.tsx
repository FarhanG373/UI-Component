import React from 'react';
import Heading from '../Heading/Heading';
import Para from '../Paragraph/Paragraph';
import './Card.scss';
export type size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Props {
  cardHeading?: any;
  CardHeadingType?: size;
  CardHeadingClass?: any;
  CardHeadingId?: any;
  cardBody?: any;
  CardBodyClass?: any;
  CardBodyId?: any;
  CardImagePath?: any;
  CardImageAlt?: any;
}

export const Card = ({
  cardHeading,
  cardBody,
  CardBodyClass,
  CardHeadingClass,
  CardBodyId,
  CardHeadingId,
  CardHeadingType="h2",
  CardImagePath,
  CardImageAlt,

  
}: Props) => {
  return (
    <div className="card">
      <img src={CardImagePath} alt={CardImageAlt}/>
      <Heading Type={CardHeadingType} HeadingClass={CardHeadingClass} HeadingId={CardHeadingId}>{cardHeading}</Heading>
      <Para ParaClass={CardBodyClass} ParaId={CardBodyId}>{ cardBody }</Para>
    </div>
  )
}

export default Card;
