import { GithubIconComponent } from './github-icon.component';
import { DocumentIconComponent } from './document-icon.component';
import { IconKey } from '../../types/enums';
import { LinkIconComponent } from './link-icon.component';
import { PersonalIconComponent } from './personal-icon.component';
import { AcademyIconComponent } from './academy-icon.component';
import { ColabIconComponent } from './colab-icon.component';

export const ICON_MAP: Record<IconKey, any> = {
  [IconKey.GitHub]: GithubIconComponent,
  [IconKey.Document]: DocumentIconComponent,
  [IconKey.Link]: LinkIconComponent,
  [IconKey.Personal]: PersonalIconComponent,
  [IconKey.Academy]: AcademyIconComponent,
  [IconKey.Colab]: ColabIconComponent
};
