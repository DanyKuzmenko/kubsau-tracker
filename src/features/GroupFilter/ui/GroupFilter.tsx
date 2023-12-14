import {FC} from 'react';

import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button';

import cls from './GroupFilter.module.scss';

type FilterStatuses = 'group' | 'room';

interface GroupFilterProps {
    searchType: string;
    setSearchType: (arg0: FilterStatuses) => void;
}

const GroupFilter: FC<GroupFilterProps> = ({searchType, setSearchType}) => {


    const handleGroupClick = (): void => {
        setSearchType('group');
    };

    const handleClassroomClick = (): void => {
        setSearchType('room');
    };

    return (
        <div className={cls.groupFilter}>
            <Button
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={searchType === 'group' ? cls.active : cls.inactive}
                onClick={handleGroupClick}
            >
                По группе
            </Button>
            <Button
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={searchType === 'room' ? cls.active : cls.inactive}
                onClick={handleClassroomClick}
            >
                По аудитории
            </Button>
        </div>
    );
};

export {GroupFilter};
