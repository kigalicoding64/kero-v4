import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, template, description } = await request.json();

    // Mock HTML generation (replace with real AI API call)
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${name}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
    header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; text-align: center; }
    header h1 { font-size: 3em; margin-bottom: 10px; }
    section { max-width: 1200px; margin: 40px auto; padding: 20px; }
    .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
    .feature { padding: 20px; border-radius: 8px; background: #f5f5f5; }
  </style>
</head>
<body>
  <header>
    <h1>${name}</h1>
    <p>${description}</p>
  </header>
  <section>
    <div class="features">
      <div class="feature"><h3>Feature 1</h3><p>Description</p></div>
      <div class="feature"><h3>Feature 2</h3><p>Description</p></div>
      <div class="feature"><h3>Feature 3</h3><p>Description</p></div>
    </div>
  </section>
</body>
</html>
    `;

    return NextResponse.json({ html });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}
