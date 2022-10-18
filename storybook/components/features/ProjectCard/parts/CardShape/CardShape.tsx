import React from "react";
import { ReactNode } from 'react';
import './CardShape.stypes.tsx';

import { styles } from './CardShape.stypes'

interface CardShapeProps {
    children: ReactNode
}

export const CardShape = ({
    children
}: CardShapeProps) => {
    return (
        <div css={styles.shape} >
            {children}
        </div>
    )
}