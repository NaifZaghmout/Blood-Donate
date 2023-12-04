import React, { FC } from 'react';
import { DonorFormWrapper } from './DonorForm.styled';

interface DonorFormProps {}

const DonorForm: FC<DonorFormProps> = () => (
 <DonorFormWrapper data-testid="DonorForm">
    DonorForm Component
 </DonorFormWrapper>
);

export default DonorForm;
