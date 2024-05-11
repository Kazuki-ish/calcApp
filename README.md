### 更新

5/11 vue create時のテンプレートファイルが残っていたため削除

### 確認方法

リポジトリクローン後 node_modulesのインストール  
npm install

確認用ローカルサーバー立ち上げ  
npm run dev

### アーキテクト

-   MVVMアーキテクチャ  
     Model: store内のコード  
     ViewModel: コンポーネント内のscript  
     View: コンポーネントのtemplate
-   Vue 3
-   Pinia（store)
-   TypeScript
-   SCSS
-   Vite
-   Vue CLI  
    ※Apple silicon mac使用

### 重視したポイント

1. 計算する桁数を制限する  
   想定外の桁数の入力を防ぐため、小数点は第三位まで、整数は1兆を超えないように計算式の時点でフォーマットしています。整数は四捨五入ができないため、一律で計算不可とし、0にリセットしています。

2. 一度に計算可能な仕組み  
   乗算と加算が混在していても正しく計算できます。配列を操作し、その後文字列として連結、計算式として評価しているためです。

3. ビジネスロジックをstoreで一括管理
   デザインに変更があっても、テンプレートの呼び出し部分を調整するだけで再利用できます。そのためにすべての計算処理はStore内で完結させています。MVVMの設計思想を意識し、可能な限り処理をカプセル化することを目指しました。

### 優先度を落としたところ

1. 過去に計算した結果の保存  
   google社製の電卓や他のweb電卓を参考にしたところ、履歴が見られる電卓が多くありましたが、現在の計算の完成度を優先しました。

2. キーパッド、キーボード入力などインターフェースへの配慮  
   シンプルなinputタグでの入力に留まっています。これは計算の仕組みが定まってからでないと致命的な修正が発生する可能性があったため、優先度を落としました。

3. テスト  
   数値のテストは手入力での擬似モンキーテストのみです。その範囲では出力値のエラーは見られませんでしたが、計算の正確性にはテストの余地があります。

### 設計要件

1人日程度の工数で、割り算と掛け算ができる電卓を作成してください。

・使用する言語やフレームワークは任意ですが、フロントエンドの言語を含めてください。
・ソースコードはgithubにpushしてください。
・公開環境の用意は不要です。ただし、ローカル環境での確認方法をreadmeに記載してください。
・途中の状態でも、1人日程度の工数をかけた時点で提出していただいて大丈夫です。
　その際、残件をgithubのissueに起票してください。
・実装にあたり重視したポイント、優先度を落としたポイント、意識した設計思想があればreadmeに記載をお願いします。
