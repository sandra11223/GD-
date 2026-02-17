const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

// @route   GET /api/resources/download/:type
// @desc    Download resource PDF
// @access  Public
router.get('/download/:type', async (req, res) => {
  try {
    const { type } = req.params;
    
    // Create a new PDF document
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 50, bottom: 50, left: 50, right: 50 }
    });

    // Set response headers for PDF download
    let filename = 'resource.pdf';
    let title = '';
    
    switch(type) {
      case 'partnership-guide':
        filename = 'B2B_Partnership_Guide.pdf';
        title = 'B2B Partnership Guide';
        break;
      case 'roi-calculator':
        filename = 'ROI_Calculator_Tool.pdf';
        title = 'ROI Calculator Tool';
        break;
      case 'university-matrix':
        filename = 'University_Selection_Matrix.pdf';
        title = 'University Selection Matrix';
        break;
      case 'visa-checklist':
        filename = 'Visa_Application_Checklist.pdf';
        title = 'Visa Application Checklist';
        break;
      default:
        return res.status(404).json({ message: 'Resource not found' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

    // Pipe the PDF to the response
    doc.pipe(res);

    // Add content based on resource type
    generatePDFContent(doc, type, title);

    // Finalize the PDF
    doc.end();

  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Error generating PDF', error: error.message });
  }
});

function generatePDFContent(doc, type, title) {
  // Header
  doc.fontSize(24)
     .fillColor('#10b981')
     .text('Global Education Council', { align: 'center' })
     .moveDown(0.5);

  doc.fontSize(20)
     .fillColor('#1f2937')
     .text(title, { align: 'center' })
     .moveDown(1);

  doc.fontSize(10)
     .fillColor('#6b7280')
     .text(`Downloaded on: ${new Date().toLocaleDateString()}`, { align: 'center' })
     .moveDown(2);

  // Content based on type
  switch(type) {
    case 'partnership-guide':
      generatePartnershipGuide(doc);
      break;
    case 'roi-calculator':
      generateROICalculator(doc);
      break;
    case 'university-matrix':
      generateUniversityMatrix(doc);
      break;
    case 'visa-checklist':
      generateVisaChecklist(doc);
      break;
  }

  // Footer
  doc.fontSize(10)
     .fillColor('#6b7280')
     .text('Global Education Council | www.globaleducationcouncil.com', 50, doc.page.height - 50, {
       align: 'center',
       width: doc.page.width - 100
     });
}

function generatePartnershipGuide(doc) {
  doc.fontSize(16).fillColor('#1f2937').text('Introduction', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('This comprehensive guide provides insights into building successful B2B education partnerships.')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Key Partnership Models', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('1. University Partnerships - Connect with top-ranked universities worldwide')
     .text('2. Corporate Training - Scalable skill development programs')
     .text('3. Education Consultancy - B2B consulting services')
     .text('4. Recruitment Agency - Streamline student recruitment processes')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Benefits of Partnership', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('• Access to 200+ partner universities across 50+ countries')
     .text('• Dedicated account managers and 24/7 support')
     .text('• Transparent ROI tracking and analytics')
     .text('• Marketing support and lead generation')
     .text('• Enterprise-grade security and data protection')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Getting Started', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('1. Register on our platform at www.globaleducationcouncil.com')
     .text('2. Complete your institutional profile')
     .text('3. Submit partnership application')
     .text('4. Schedule consultation with our team')
     .text('5. Begin collaboration and grow together')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Contact Information', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('Email: partnerships@globaleducationcouncil.com')
     .text('Phone: +1 234 567 8900')
     .text('Website: www.globaleducationcouncil.com');
}

function generateROICalculator(doc) {
  doc.fontSize(16).fillColor('#1f2937').text('ROI Calculator for Corporate Training', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('Calculate the return on investment for your corporate training programs.')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Key Metrics to Track', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('1. Training Investment Costs')
     .text('   • Course fees and materials')
     .text('   • Employee time (hours × hourly rate)')
     .text('   • Technology and platform costs')
     .moveDown(0.5)
     .text('2. Performance Improvements')
     .text('   • Productivity increase (%)')
     .text('   • Quality improvement metrics')
     .text('   • Error reduction rate')
     .moveDown(0.5)
     .text('3. Business Impact')
     .text('   • Revenue increase')
     .text('   • Cost savings')
     .text('   • Employee retention improvement')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('ROI Calculation Formula', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('ROI = [(Benefits - Costs) / Costs] × 100%')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Example Calculation', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('Training Investment: $50,000')
     .text('Annual Benefits: $150,000')
     .text('ROI = [($150,000 - $50,000) / $50,000] × 100% = 200%')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Best Practices', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('• Set clear, measurable objectives before training')
     .text('• Track metrics consistently over time')
     .text('• Include both tangible and intangible benefits')
     .text('• Review and adjust programs based on results');
}

function generateUniversityMatrix(doc) {
  doc.fontSize(16).fillColor('#1f2937').text('University Selection Matrix', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('A comprehensive guide for matching students with partner universities.')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Selection Criteria', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('1. Academic Requirements')
     .text('   • GPA/Grade requirements')
     .text('   • Standardized test scores (SAT, ACT, GRE, GMAT)')
     .text('   • Language proficiency (IELTS, TOEFL)')
     .moveDown(0.5)
     .text('2. Program Offerings')
     .text('   • Available majors and specializations')
     .text('   • Research opportunities')
     .text('   • Internship and co-op programs')
     .moveDown(0.5)
     .text('3. Financial Considerations')
     .text('   • Tuition fees')
     .text('   • Scholarship availability')
     .text('   • Living costs')
     .moveDown(0.5)
     .text('4. Location Factors')
     .text('   • Country and city')
     .text('   • Climate and culture')
     .text('   • Post-study work opportunities')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Evaluation Process', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('Step 1: Assess student profile and goals')
     .text('Step 2: Filter universities by basic requirements')
     .text('Step 3: Compare program offerings and rankings')
     .text('Step 4: Evaluate financial feasibility')
     .text('Step 5: Consider location preferences')
     .text('Step 6: Review application deadlines')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Partner University Network', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('• 200+ partner universities worldwide')
     .text('• Coverage across 50+ countries')
     .text('• Programs in all major disciplines')
     .text('• Undergraduate, graduate, and doctoral programs');
}

function generateVisaChecklist(doc) {
  doc.fontSize(16).fillColor('#1f2937').text('Visa Application Checklist', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('Step-by-step checklist for group visa applications.')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Pre-Application Phase', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('☐ Confirm university admission letters')
     .text('☐ Verify passport validity (minimum 6 months)')
     .text('☐ Gather financial documents')
     .text('☐ Prepare academic transcripts and certificates')
     .text('☐ Obtain language proficiency test results')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Required Documents', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('☐ Valid passport')
     .text('☐ University acceptance letter')
     .text('☐ Proof of financial support')
     .text('☐ Academic records')
     .text('☐ Language test scores')
     .text('☐ Passport-sized photographs')
     .text('☐ Visa application form (completed)')
     .text('☐ Travel insurance')
     .text('☐ Medical examination results (if required)')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Application Process', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('☐ Complete online visa application')
     .text('☐ Pay visa application fee')
     .text('☐ Schedule visa interview appointment')
     .text('☐ Prepare for visa interview')
     .text('☐ Submit biometric data (if required)')
     .text('☐ Track application status')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Post-Approval Steps', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('☐ Collect visa from embassy/consulate')
     .text('☐ Verify visa details for accuracy')
     .text('☐ Book flight tickets')
     .text('☐ Arrange accommodation')
     .text('☐ Prepare for departure')
     .moveDown(1);

  doc.fontSize(14).fillColor('#10b981').text('Group Application Benefits', { underline: true }).moveDown(0.5);
  doc.fontSize(11).fillColor('#374151')
     .text('• Streamlined processing for multiple applicants')
     .text('• Dedicated support from our visa team')
     .text('• Higher approval rates through proper documentation')
     .text('• Coordinated interview scheduling');
}

module.exports = router;
