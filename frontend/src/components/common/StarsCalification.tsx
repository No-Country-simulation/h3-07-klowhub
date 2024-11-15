import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';

const StarsCalification: FC<{ value: number }> = ({ value }) => {
    return (
        <div>
            {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: index < value ? "#FBBC05" : "#D9D9D9" }}
                />
            ))}
        </div>
    )
}

export default StarsCalification