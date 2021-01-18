---
title: Computational Lingusitics 
date: 2021-01-17
published: true
---
[]{#_heading=h.gjdgxs}Natural Language Processing

# []{#_heading=h.30j0zll}Words

The Brown corpus is a million-word collection of samples from 500 written English texts. How many words are in the following Brown sentence?

He stepped out into the hall, was delighted to encounter a water brother.

This sentence has 13 words if we don't count punctuation marks as words, 15 if we count punctuation. Whether we treat period ("."), comma (","), and so on as words depend on the task.

**Punctuation** is critical for finding boundaries of things (commas, periods, colons) and for identifying some aspects of meaning (question marks, exclamation marks, quotation marks). For some tasks, like part-of-speech tagging or parsing or speech synthesis, we sometimes treat punctuation marks as if they were separate words.

An utterance is the spoken correlate of a sentence:

I do uh main- mainly business data processing

This **utterance** has two kinds of **disfluencies**. The broken-off word "main-" is a fragment. Words like "uh" and "um" are called **fillers** or filled pauses.

For a speech transcription system, we might want to eventually strip out the disfluencies. But we also sometimes keep disfluencies around. **Disfluencies** like uh or um are actually helpful in speech recognition in **predicting the upcoming word**, because they may signal that the speaker is restarting the clause or idea, and so for speech recognition they are treated as regular words. Because people use different disfluencies they can also be a cue to **speaker identification**.

What do you think they are? Are capitalized tokens like They and uncapitalized tokens like they the same word? These are lumped together in some tasks (speech recognition), while for part-of-speech or named-entity tagging, capitalization is a useful feature and is retained.

How about inflected forms like cats versus cat? These two words have the same lemma cat but are different wordforms. A **lemma** is a set of lexical forms having the same stem, the same major part-of-speech, and the same word sense. The **wordform** is the full inflected or derived form of the word.

How many words are there in English? To answer this question we need to distinguish two ways of talking about words. **Types** are the number of distinct words in a corpus; if the set of words in the vocabulary is V, the number of types is the word token vocabulary size \|V\|. **Tokens** are the total number N of running words. If we ignore punctuation, the following Brown sentence has 16 tokens and 14 types:

They picnicked by the pool, then lay back on the grass and looked at the stars.

  ------------------------------------- ---------------- -------------------
  **Corpus**                            **Tokens = N**   **Types = \|V\|**
  Shakespeare                           884 thousand     31 thousand
  Brown corpus                          1 million        38 thousand
  Switchboard telephone conversations   2.4 million      20 thousand
  COCA                                  440 million      2 million
  Google N-grams                        1 trillion       13 million
  ------------------------------------- ---------------- -------------------

The larger the corpora we look at, the more word types we find, and in fact this relationship between the number of types \|V\| and number Herdan's Law of tokens N is called Herdan's Law (Herdan, 1960) or Heaps' Law (Heaps, 1978) after its discoverers (in linguistics and information retrieval respectively).

where k and β are positive constants, and .. The value of β depends on the corpus size and the genre.

Another measure of the number of words in the language is the number of lemmas instead of wordform types. Dictionaries can help in giving lemma counts; dictionary **entries** or **boldface forms** are a very rough upper bound on the number of lemmas (since some lemmas have multiple boldface forms). The 1989 edition of the Oxford English Dictionary had 615,000 entries.

# []{#_heading=h.1fob9te}Corpora

**Any particular piece of text that we study is produced by one or more specific speakers or writers, in a specific dialect of a specific language, at a specific time, in a specific place, for a specific function.**

It's also quite common for speakers or writers to use multiple languages in a code switching single communicative act, a phenomenon called **code switching.**

**Common dimensions of corpora to consider:**

-   **Genre:** fiction, legal, scientific,
-   **Demographic** characteristics.
-   **Time:** historical period languages change over time.

# []{#_heading=h.3znysh7}Text Normalization

## []{#_heading=h.2et92p0}Word Tokenization and Normalization

Things to keep in mind for tokenization

-   **Punctuations** are considered as tokens but in cases where they are removed or used as a marker. We should be careful with texts like Ph.D., AT&T, cap'n. prices (\$45.55), dates (01/02/06); URLs (http://www.stanford.edu), hashtags (\#nlproc), or email addresses (<someone@cs.colorado.edu>)
-   **Clitic contractions** must be expanded like what're to the two tokens what are, and we're to we are.
-   Tokenization is tied up with **named entity recognition** and must recognize, multiword expressions as single token like New York or rock 'n' roll
-   **Tokens** can be normalized like the USA and US or Uh-Huh and Uhhuh. Help in information retrieval and coherent information extraction.
-   **Case folding**, everything is mapped to lower case for speech recognition and information retrieval(**!!!**), but in case of sentiment analysis, information extraction case is useful.

Some languages like Chinese, Japanese do not use spaces to mark word boundaries; they require alternative segmentation methods, **MaxMatch Algorithm**, The maximum matching algorithm starts by pointing at the beginning of a string. It chooses the longest word in the dictionary that matches the input at the current position. The pointer is then advanced to the end of that word in the string. If no word matches, the pointer is instead advanced to one character (creating a one character word). Surprisingly works well for Chinese.

## []{#_heading=h.tyjcwt}Lemmatization and Stemming

**Lemmatization** is the task of determining that two words have the same root, despite their surface differences. The words am, are, and is have the shared lemma be; the words dinner and dinners both have the lemma dinner.

Lemmatization involves **morphological parsing**. **Morphology** is the study of the way words are built up from smaller meaning-bearing units called morphemes. Two broad classes of morphemes can be distinguished: **stems**---the central morpheme of the word, supplying the main meaning--- and **affixes**---adding "additional" meanings of various kinds.

**Stemming** is a naive version of morphological parsing.

Lemmatization and Stemming lose a lot of information that is very useful in human linguistic understanding.

### []{#_heading=h.3dy6vkm}Porter Stemmer ()

Porter Stemmer is based on a crude approach of chopping off the word final affixes and at each pass has rewrite rules to reduce to a lemma.

-   ATIONAL → ATE (e.g., relational → relate)
-   ING → if stem contains vowel (e.g., motoring → motor)
-   SSES → SS (e.g., grasses → grass) lot many...

## []{#_heading=h.1t3h5sf}Byte Pair Encoding

Byte-pair encoding is based on a method for text compression, but here we use it for tokenization instead. The intuition of the algorithm is to **iteratively merge frequent pairs of characters**.

By treating two similar words identically, **these normalization methods help deal with the problem of unknown words, words that a system has not seen before**.

Steps:

-   Prepare an **input dictionary of words**, with a special character at the end to represent the word, **with its frequency**. Since it\'s a pairwise encoding make sure to have a **unique delimiter between pairs** Ex: \'l_o\_w\_\</w\>\': 5 where word is low, \<\\w\> denotes end of word and \_ denotes unmerged byte pairs. 5 is its frequency.
-   **Create pairs** of characters from the input dictionary with their frequency. Ex: ('w', '\<\\w\>'): 5
-   Choose the **pairs with maximum frequency and merge the input dictionary**. Ex: 'l_o\_w\</w\>': 5
-   The existing token pair ('w','\</w\>'): 5 get **merged into new token 'w\</w\>': 5**
-   When the above steps are run iteratively, **new tokens representing unique words are generated** and **unknown words are represented as multiple tokens**.
-   **Number of iterative steps can be defined by the system**. num_merges.
```python
**import** collections

**import** re

**def** get_stats**(**vocab**):**

pairs **=** collections**.**defaultdict**(int)**

**for** word**,** freq **in** vocab**.**items**():**

symbols **=** word**.**split**()**

**for** i **in** **range(len(**symbols**)** **-** 1**):**

pairs**\[**symbols**\[**i**\],** symbols**\[**i **+** 1**\]\]** **+=** freq

**return** pairs

**def** merge_vocab**(**pair**,** v_in**):**

v_out **=** **{}**

bigram **=** re**.**escape**(**\'\_\'**.**join**(**pair**))**

p **=** re**.compile(**r\'(?\<!\\S)\' **+** bigram **+** r\'(?!\\S)\'**)**

**for** word **in** v_in**:**

w_out **=** p**.**sub**(**\'\'**.**join**(**pair**),** word**)**

v_out**\[**w_out**\]** **=** v_in**\[**word**\]**

**return** v_out

**def** get_tokens**(**vocab**):**

tokens **=** collections**.**defaultdict**(int)**

**for** word**,** freq **in** vocab**.**items**():**

word_tokens **=** word**.**split**()**

**for** token **in** word_tokens**:**

tokens**\[**token**\]** **+=** freq

**return** tokens

vocab **=** **{**\'l_o\_w\_\</w\>\'**:** 5**,** \'l_o\_w_e\_s_t\_\</w\>\'**:** 2**,**

\'n_e\_w_e\_r\_\</w\>\'**:** 6**,** \'w_i\_d_e\_r\_\</w\>\'**:** 3**,** \'n_e\_w\_\</w\>\'**:** 2**}**

num_merges **=** 8

**for** i **in** **range(**num_merges**):**

pairs **=** get_stats**(**vocab**)**

best **=** **max(**pairs**,** key**=**pairs**.**get**)**

vocab **=** merge_vocab**(**best**,** vocab**)**

tokens = get_tokens(vocab)

**print(**best**)**

**print(**'New Tokens: {}'.format(tokens))
```
Of course in real algorithms BPE is run with many thousands of merges on a very large input dictionary. The result is that most words will be represented as full symbols, and **only the very rare words (and unknown words) will have to be represented by their parts.**

## []{#_heading=h.4d34og8}Sentence Segmentation
