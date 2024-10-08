import * as stylex from '@stylexjs/stylex';

import { SearchTextField } from '@/components/SearchTextField';
import { mixinStyles } from '@/styles';
import { color } from '@/styles/color.stylex';
import { size } from '@/styles/size.stylex';
import { viewport } from '@/styles/viewport.stylex';

interface SearchResultHeaderProps {
  keyword: string; // 검색어
  articleCount: number; // 검색 결과 글 목록 수
}

export function SearchResultHeader({ keyword, articleCount }: SearchResultHeaderProps) {
  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.keyword, mixinStyles.font(36, 700))}>{keyword}</div>
      <p {...stylex.props(styles.description, mixinStyles.font(18, 500))}>
        총 <strong>{articleCount}개</strong>의 글이 있습니다.
      </p>
      <SearchTextField isFullWidth />
    </div>
  );
}

const styles = stylex.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: size[12],
    margin: 'auto',
    maxWidth: '100%',
    padding: `${size[60]} ${size[24]} ${size[24]}`,
    width: viewport.contentInnerWidth,
  },
  keyword: {
    color: color.primary,
  },
  description: {
    marginBottom: size[20],
  },
});
