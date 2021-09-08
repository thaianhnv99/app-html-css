import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LANG_EN, LANG_VI} from "../config/constants/app.constants";
import {Route, Router} from "@angular/router";

interface LanguageFlag {
  lang: string;
  name: string;
  flag: string;
  active?: boolean;
}

interface Locale {
  localeCode: string;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  rfContact: FormGroup = new FormGroup({});
  language: LanguageFlag | undefined;
  abc: boolean = false;
  languages: LanguageFlag[] = [
    {
      lang: LANG_EN,
      name: 'English',
      flag: './assets/media/svg/flags/226-united-states.svg'
    },
    {
      lang: LANG_VI,
      name: 'Tiếng Việt',
      flag: './assets/media/svg/flags/220-vietnam.svg'
    }
  ];
  locales: Locale[] = [
    {localeCode: 'en-US', label: 'English'},
    {localeCode: 'vi-VN', label: 'Tiếng Việt'},
  ];

  constructor(
    private fb: FormBuilder,
    private route: Router
  ) {
  }

  ngOnInit() {
    this.rfContact = this.fb.group({
      a: new FormControl('D'),
      b: new FormControl('E'),
      c: new FormControl('F'),
      tels: this.fb.array([
        this.fb.control('')
      ])
    });
    // this.translate.setDefaultLang('en');
  }

  changeLanguage(lang: any) {
    console.log('abc', lang)
    // this.route.navigate([`/${lang}`]);
  }

  get tels(): FormArray {
    return this.rfContact.get('tels') as FormArray;
  }

  addTel() {
    this.tels.push(this.fb.control(''));
  }

  removeTel(index: number) {
    this.tels.removeAt(index);
  }
}


// "i18n": {
//   "locales": {
//     "vi": "src/locale/messages.vi.xlf",
//       "en-US": "src/locale/messages.en-US.xlf"
//   },
//   "sourceLocale": "en"
// },
