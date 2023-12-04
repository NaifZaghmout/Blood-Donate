import React, { FC } from 'react';
import { NotFoundWrapper } from './NotFound.styled';

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = () => (
 <NotFoundWrapper data-testid="NotFound">
    NotFound Component
 </NotFoundWrapper>
);

export default NotFound;
