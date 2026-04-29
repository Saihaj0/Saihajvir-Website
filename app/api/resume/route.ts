import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    // Read the PDF file from public directory
    const filePath = join(process.cwd(), 'public', 'Saihajvir-Singh-Resume.pdf')
    const fileBuffer = await readFile(filePath)

    // Return the file with proper headers for download
    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Saihajvir-Singh-Resume.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Error reading resume:', error)
    return new Response('Resume not found', { status: 404 })
  }
}
