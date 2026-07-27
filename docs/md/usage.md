# Usage of MS Annika

MS Annika makes use of the workflow interface in Proteome Discoverer, which should be straight-forward to use. Step by step instructions for people
unfamiliar with Proteome Discoverer are given in the [tutorial](/tutorial). The next sections also give an overview of parameters, results, example workflows
and example data. Typically an analysis with MS Annika takes a few minutes for small samples and up to a few hours for larger samples and proteome-wide searches.
Please also refer to the specific sections for [Astral](/astral) and [timsTOF](/tims) data if you are analyzing such data.

## Parameters & Results

Please refer to the [MS Annika User Manual](https://github.com/hgb-bin-proteomics/MSAnnika/blob/master/MS_Annika_3.0_UserManual.pdf) for a detailed description of all MS Annika parameters as
well as descriptions of all result tables. For further down-stream analysis of MS Annika results we recommend taking a look at [MS Annika Extensions](https://github.com/hgb-bin-proteomics/MSAnnika_Extensions).

## Validation

MS Annika provides basic validation at the crosslink-spectrum-match and peptide pair or residue pair level. However, for more sophisticated validation we recommend using MS Annika in combination with xiFDR ([GitHub](https://github.com/Rappsilber-Laboratory/xifdr) / [Homepage](https://www.rappsilberlab.org/software/xifdr/)). We [have shown](https://doi.org/10.1038/s42004-024-01386-x) that using MS Annika with xiFDR provides better results than MS Annika alone. You can use xiFDR for validation of MS Annika results by exporting your crosslink-spectrum-matches (CSMs) in Proteome Discoverer and uploading them to [pyXLMS](https://hgb-bin-proteomics.github.io/pyXLMS-app) ➡️ go to the `Export` tab ➡️ and under `Export Crosslink-Spectrum-Matches` select `xiFDR`. The exported file can then be directly used with xiFDR for validation and aggregation to protein-protein interaction level.
