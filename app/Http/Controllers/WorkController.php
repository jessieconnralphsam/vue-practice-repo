<?php

namespace App\Http\Controllers;

use App\Models\Work;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class WorkController extends BaseController
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'company' => 'required|string|max:255',
            'salary' => 'nullable|numeric|between:0,99999999.99',
        ]);

        $work = Work::create($validated);

        return response()->json($work, 201);
    }
}