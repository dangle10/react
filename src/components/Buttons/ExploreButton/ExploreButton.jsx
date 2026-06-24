import styles from "./ExploreButton.module.scss";
import React, { useState } from "react";

function ExploreButton({ Color }) {
    const [isHovered, setIsHovered] = useState(false);

    // Hàm kiểm tra màu sáng hay tối
    const isLightColor = (color) => {
        // Xử lý rgba, hex, tên màu
        let r, g, b;
        
        if (color.startsWith('rgba')) {
            const match = color.match(/\d+/g);
            [r, g, b] = match;
        } else if (color.startsWith('#')) {
            const hex = color.replace('#', '');
            r = parseInt(hex.substr(0, 2), 16);
            g = parseInt(hex.substr(2, 2), 16);
            b = parseInt(hex.substr(4, 2), 16);
        } else {
            return false;
        }

        // Tính độ sáng (luminance)
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        return luminance > 0.5; // > 0.5 là màu sáng
    };

    const textColor = isHovered 
        ? (isLightColor(Color) ? '#000' : '#fff')
        : Color;

    return (
        <button 
            type="button"
            className={styles.btn}
            style={{ 
                color: textColor,
                borderColor: Color,
                backgroundColor: isHovered ? Color : 'transparent',
                cursor: 'pointer'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Explore
        </button>
    );
}

export default React.memo(ExploreButton);