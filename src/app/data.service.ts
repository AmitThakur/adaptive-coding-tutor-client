import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  LESSONS = [
    {
      title: "Lesson 01",
      description: "Python Lists. https://docs.python.org/3/tutorial/introduction.html#lists",
      completed: true
    },
    {
      title: "Lesson 02",
      description: "String pattern matching. https://docs.python.org/3/tutorial/stdlib.html#string-pattern-matching",
      completed: true
    },
    {
      title: "Lesson 03",
      description: "String lower(). https://docs.python.org/3/library/stdtypes.html#str.lower",
      completed: false
    },
    {
      title: "Lesson 04",
      description: "Regular expressions. https://docs.python.org/3/library/re.html",
      completed: false
    }
  ];

  EXERCISES = [
    {
      title: "Funky String",
      description: `Given a sentence, where words are delimited by a comma, a period, or a space character, 
      make first and last characters of each of the word to uppercase and other ones to lowercase.`,
      code : `def process_sentence(sentence):
    import re
    
    # Split the sentence into words based on delimiters: comma, period, or space
    words = re.split(r'(\s+|,|\.)', sentence)
    
    # Function to process individual words
    def process_word(word):
        if len(word) == 0:
            return word
        elif len(word) == 1:
            return word.upper()
        else:
            return word[0].upper() + word[1:-1].lower() + word[-1].upper()
    
    # Process each word
    processed_words = [process_word(word) for word in words]
    
    # Join the processed words back into a sentence
    return ''.join(processed_words)

# Example usage:
sentence = "hello, world. this is a test."
result = process_sentence(sentence)
print(result)
`
    },
    {
      title: "Sentence has a word (case-insensitive)",
      description: `Find if word exists independently in a sentence in a case-insensitive manner. 
      The word should not be a substring of another word.`
    }
  ];

  constructor(private http: HttpClient) { }

  compileCode(code: string, lang: string): Observable<any> {
    return this.http.post<any>('http://localhost:8000/compile-code', {
      code: code,
      lang: lang
    });
  }

  // TODO: Shift the host and port info to the environment specific file
  checkServerHealth(): Observable<any> {
    return this.http.get<string>('http://localhost:8000/health-status');
  }

  getExercises(): Observable<any> {
    return of(this.EXERCISES);
  }

  getLessons(): Observable<any> {
    return of(this.LESSONS);
  }
}
