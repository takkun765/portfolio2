export function getBaseUrl() {
    // 開発環境
    if (process.env.NODE_ENV === 'development') {
        return 'http://127.0.0.1:3000';
    }
    
    // 本番環境
    if (process.env.NODE_ENV === 'production') {
        
        // Vercelの自動環境変数を使用（Vercelでデプロイする場合）
        if (process.env.VERCEL_URL) {
            return `https://${process.env.VERCEL_URL}`;
        }
    }
    
    // その他の環境
    return 'http://localhost:3000';
}