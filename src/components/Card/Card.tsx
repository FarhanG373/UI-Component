import React from 'react';
import Heading from '../Heading/Heading';
import Para from '../Paragraph/Paragraph';
import './Card.scss';
export type size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type view = 'list' | 'grid';
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
  children?: any;
  CardView?: view;
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
  children,
  CardView = "grid"
}: Props) => {
  return (
    <div className={`card ${CardView}`}>
      <img src={CardImagePath} alt={CardImageAlt} />
      <div className='cBody'>
      <Heading Type={CardHeadingType} HeadingClass={`cardHeading ${CardHeadingClass ? CardHeadingClass : ''}`} HeadingId={CardHeadingId}>{cardHeading}</Heading>
      <Para ParaClass={CardBodyClass} ParaId={CardBodyId}>{cardBody}</Para>
        {children}
        </div>
    </div>
  )
}

export default Card;
