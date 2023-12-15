import {FC} from 'react';

import {Button, ButtonSize, ButtonTheme} from 'shared/ui/Button';

import cls from './GroupFilter.module.scss';

type FilterStatuses = 'groups' | 'rooms';

interface GroupFilterProps {
    searchType: string;
    setSearchType: (arg0: FilterStatuses) => void;
    setInputValue: (str: string) => void
}

const GroupFilter: FC<GroupFilterProps> = ({searchType, setSearchType, setInputValue}) => {


    const handleGroupClick = (): void => {
        setSearchType('groups');
        setInputValue('')
    };

    const handleClassroomClick = (): void => {
        setInputValue('')
        setSearchType('rooms');
    };

    return (
        <div className={cls.groupFilter}>
            <Button
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={searchType === 'groups' ? cls.active : cls.inactive}
                onClick={handleGroupClick}
            >
                По группе
            </Button>
            <Button
                theme={ButtonTheme.TERTIARY}
                size={ButtonSize.XS}
                className={searchType === 'rooms' ? cls.active : cls.inactive}
                onClick={handleClassroomClick}
            >
                По аудитории
            </Button>
        </div>
    );
};

export {GroupFilter};
